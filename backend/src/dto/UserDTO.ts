import {Match} from "../validation/match.decorator";
import {IsNotEmpty, Length, Validate} from "class-validator";
import {PasswordValidation, PasswordValidationRequirement} from "class-validator-password-check";

const passwordRequirement: PasswordValidationRequirement = {
    mustContainLowerLetter: true,
    mustContainNumber: true,
    mustContainUpperLetter: true,
}

export class UserDTO {

    @IsNotEmpty({message: "This field is required"})
    fullName: string

    @IsNotEmpty({message: "This field is required"})
    email: string;

    @Validate(PasswordValidation, [passwordRequirement],{message: "Password should contain characters of multiple register, numbers and special characters"})
    @Length(5,50,{message: "Password must be at least 8 letters long"})
    @IsNotEmpty({message: "This field is required"})
    password: string

    @Match<UserDTO>( (s) => s.password,{message: "Passwords do not match"})
    passwordConfirmation: string
}
