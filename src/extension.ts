import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.languages.registerOnTypeFormattingEditProvider('heddle', new HeddleOnTypeFormattingEditProvider(), '|', '\n')
    );
}

class HeddleOnTypeFormattingEditProvider implements vscode.OnTypeFormattingEditProvider {
    public provideOnTypeFormattingEdits(
        document: vscode.TextDocument,
        position: vscode.Position,
        ch: string,
        options: vscode.FormattingOptions,
        token: vscode.CancellationToken
    ): vscode.ProviderResult<vscode.TextEdit[]> {
        if (ch === '|') {
            return this.providePipeIndentation(document, position, options);
        }
        return [];
    }

    private providePipeIndentation(
        document: vscode.TextDocument,
        position: vscode.Position,
        options: vscode.FormattingOptions
    ): vscode.TextEdit[] {
        return [];
    }
}
