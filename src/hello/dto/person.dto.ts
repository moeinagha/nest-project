import { IsNumber, IsOptional, Length, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class PersonDto {
    @Length(3, 10)
    @ApiProperty({ description: 'Enter Your Name > ', minLength: 3, maxLength: 10, default: 'Moein' })
    name: string;

    @IsNumber()
    @IsOptional()
    @Min(1960)
    @ApiPropertyOptional({ description: 'Optional', default: 2000, minimum: 1960 })
    year: number;
}