import { IsDefined, IsNumber } from 'class-validator';

import { DtoValidation } from '@/modules/core/decorators';

/**
 * 批量恢复验证
 */
@DtoValidation()
export class RestoreDto {
    @IsNumber(undefined, {
        each: true,
        message: 'ID格式错误',
    })
    @IsDefined({
        each: true,
        message: 'ID必须指定',
    })
    ids: number[] = [];
}
