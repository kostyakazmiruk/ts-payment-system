"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = exports.TransactionType = exports.TransactionStatus = void 0;
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["PENDING"] = "PENDING";
    TransactionStatus["PROCESSING"] = "PROCESSING";
    TransactionStatus["COMPLETED"] = "COMPLETED";
    TransactionStatus["FAILED"] = "FAILED";
})(TransactionStatus || (exports.TransactionStatus = TransactionStatus = {}));
var TransactionType;
(function (TransactionType) {
    TransactionType["PAYMENT"] = "PAYMENT";
    TransactionType["REFUND"] = "REFUND";
})(TransactionType || (exports.TransactionType = TransactionType = {}));
var Transaction = /** @class */ (function () {
    function Transaction() {
    }
    Transaction.prototype.isPending = function () {
        return this.status === TransactionStatus.PENDING;
    };
    Transaction.prototype.isProcessing = function () {
        return this.status === TransactionStatus.PROCESSING;
    };
    Transaction.prototype.isCompleted = function () {
        return this.status === TransactionStatus.COMPLETED;
    };
    Transaction.prototype.isFailed = function () {
        return this.status === TransactionStatus.FAILED;
    };
    // Business logic for transaction updates
    Transaction.prototype.canUpdate = function () {
        // Can only update transactions that are not completed or failed
        return (this.status !== TransactionStatus.COMPLETED &&
            this.status !== TransactionStatus.FAILED);
    };
    Transaction.prototype.markAsProcessing = function () {
        if (!this.canUpdate()) {
            throw new Error('Cannot update a completed or failed transaction');
        }
        this.status = TransactionStatus.PROCESSING;
        this.updatedAt = new Date();
    };
    Transaction.prototype.markAsCompleted = function (processorResponse) {
        if (!this.canUpdate()) {
            throw new Error('Cannot update a completed or failed transaction');
        }
        this.status = TransactionStatus.COMPLETED;
        this.processorResponse = processorResponse;
        this.updatedAt = new Date();
    };
    Transaction.prototype.markAsFailed = function (errorMessage, processorResponse) {
        if (!this.canUpdate()) {
            throw new Error('Cannot update a completed or failed transaction');
        }
        this.status = TransactionStatus.FAILED;
        this.errorMessage = errorMessage;
        this.processorResponse = processorResponse;
        this.updatedAt = new Date();
    };
    return Transaction;
}());
exports.Transaction = Transaction;
