"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTransactionCommand = void 0;
var UpdateTransactionCommand = /** @class */ (function () {
    function UpdateTransactionCommand(id, status, processorResponse, errorMessage) {
        this.id = id;
        this.status = status;
        this.processorResponse = processorResponse;
        this.errorMessage = errorMessage;
    }
    return UpdateTransactionCommand;
}());
exports.UpdateTransactionCommand = UpdateTransactionCommand;
