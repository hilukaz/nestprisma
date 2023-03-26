import { IsEmail, Length, Matches } from 'class-validator';

export class CreateUserDto {
    @Length(3, 50)
    name: string;
  
    @IsEmail()
    email: string;
  
    @Length(6, 20)
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, {
      message:
        'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula e um número',
    })
    password: string;
  
    confirmPassword: string;
}