"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionDto = void 0;
var TransactionDto = /** @class */ (function () {
    function TransactionDto() {
    }
    TransactionDto.fromEntity = function (entity) {
        var dto = new TransactionDto();
        dto.id = entity.id;
        dto.userId = entity.userId;
        dto.paymentMethodId = entity.paymentMethodId;
        dto.type = entity.type;
        dto.amount = entity.amount;
        dto.currency = entity.currency;
        dto.status = entity.status;
        dto.description = entity.description;
        dto.errorMessage = entity.errorMessage;
        dto.createdAt = entity.createdAt;
        dto.updatedAt = entity.updatedAt;
        return dto;
    };
    return TransactionDto;
}());
exports.TransactionDto = TransactionDto;
