'use strict';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const VSCode = __importStar(require("vscode"));
const notification_1 = require("./notification");
function setLogLevelHandler() {
    return __awaiter(this, void 0, void 0, function* () {
        const processData = yield VSCode.commands.executeCommand('sts/livedata/listProcesses');
        const choiceMap = new Map();
        const choices = [];
        processData.forEach(p => {
            const slash = p.action.lastIndexOf('/');
            if (slash >= 0) {
                const choiceLabel = p.label;
                if (!choiceMap.has(choiceLabel)) {
                    choiceMap.set(choiceLabel, p);
                    choices.push(choiceLabel);
                }
            }
        });
        if (choices) {
            const picked = yield VSCode.window.showQuickPick(choices);
            if (picked) {
                const chosen = choiceMap.get(picked);
                try {
                    const loggers = yield getLoggers(chosen);
                    yield displayLoggers(loggers, chosen.processKey);
                }
                catch (error) {
                    VSCode.window.showErrorMessage("Failed to fetch loggers for the process " + chosen.processKey);
                }
            }
        }
    });
}
function getLoggers(processInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            yield VSCode.window.withProgress({
                location: VSCode.ProgressLocation.Window,
                title: "Fetching Loggers Data for process " + processInfo.processKey,
                cancellable: false
            }, (progress) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const loggers = yield VSCode.commands.executeCommand('sts/livedata/getLoggers', processInfo, { "endpoint": "loggers" });
                    progress.report({});
                    resolve(loggers);
                }
                catch (error) {
                    reject(error);
                }
            }));
        }));
    });
}
function displayLoggers(processLoggersData, processKey) {
    return __awaiter(this, void 0, void 0, function* () {
        let items;
        const loggersData = processLoggersData.loggers;
        if (loggersData.loggers) {
            items = Object.keys(loggersData.loggers).map(packageName => {
                const logger = loggersData.loggers[packageName];
                const effectiveLevel = logger.effectiveLevel;
                const label = packageName + ' (' + effectiveLevel + ')';
                return {
                    packageName,
                    effectiveLevel,
                    label
                };
            });
        }
        if (items) {
            const chosenPackage = yield VSCode.window.showQuickPick(items);
            if (chosenPackage) {
                const chosenlogLevel = yield VSCode.window.showQuickPick(loggersData.levels);
                yield VSCode.commands.executeCommand('sts/livedata/configure/logLevel', { "processKey": processKey }, chosenPackage, { "configuredLevel": chosenlogLevel });
            }
        }
    });
}
function logLevelUpdated(process) {
    return __awaiter(this, void 0, void 0, function* () {
        VSCode.window.showInformationMessage("The Log level for " + process.packageName + " has been updated from " +
            process.effectiveLevel + " to " + process.configuredLevel);
    });
}
/** Called when extension is activated */
function activate(client, options, context) {
    client.onNotification(notification_1.LiveProcessLogLevelUpdatedNotification.type, logLevelUpdated);
    context.subscriptions.push(VSCode.commands.registerCommand('vscode-spring-boot.set.log-levels', () => {
        if (client.isRunning()) {
            return setLogLevelHandler();
        }
        else {
            VSCode.window.showErrorMessage("No Spring Boot project found. Action is only available for Spring Boot Projects");
        }
    }));
}
exports.activate = activate;
//# sourceMappingURL=set-log-levels-ui.js.map