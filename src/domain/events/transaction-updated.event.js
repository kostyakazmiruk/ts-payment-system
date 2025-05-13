"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUpdatedEvent = void 0;
var TransactionUpdatedEvent = /** @class */ (function () {
    function TransactionUpdatedEvent(id, status, processorResponse, errorMessage) {
        this.id = id;
        this.status = status;
        this.processorResponse = processorResponse;
        this.errorMessage = errorMessage;
    }
    return TransactionUpdatedEvent;
}());
exports.TransactionUpdatedEvent = TransactionUpdatedEvent;
