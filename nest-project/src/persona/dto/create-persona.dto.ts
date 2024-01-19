import { ApiProperty } from "@nestjs/swagger";

export class CreatePersonaDto {
    @ApiProperty({
        example: 12345678,
        required: true
    })
    dni: number;

    @ApiProperty({
        example: "Daniel",
        required: true
    })
    name: string;

    @ApiProperty({
        example: "Suarez",
        required: true
    })
    lastname: string;

    @ApiProperty({
        example: "14/04/2004",
        required: true
    })
    birthdate: string;

    @ApiProperty({
        example: "male",
        required: false
    })
    sex: string;
}
