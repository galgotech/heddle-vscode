"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
const vscode = require("vscode");
function activate(context) {
    context.subscriptions.push(vscode.languages.registerOnTypeFormattingEditProvider('heddle', new HeddleOnTypeFormattingEditProvider(), '|', '\n'));
}
class HeddleOnTypeFormattingEditProvider {
    provideOnTypeFormattingEdits(document, position, ch, options, token) {
        if (ch === '|') {
            return this.providePipeIndentation(document, position, options);
        }
        return [];
    }
    providePipeIndentation(document, position, options) {
        return [];
    }
}
//# sourceMappingURL=extension.js.map