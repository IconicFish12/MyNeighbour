import { NestFactory } from '@nestjs/core';
import {
  BadRequestException,
  INestApplication,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';
import { CostumeValidationPipe } from './common/pipes/costume-validation.pipe';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';

export async function bootstrap() {
  const app = await NestFactory.create<INestApplication>(AppModule, {
    logger: ['debug', 'error', 'log', 'verbose'],
    cors: true,
    bodyParser: true,
  });

  useContainer(app.select(AppModule, { abortOnError: true }), {
    fallbackOnErrors: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        interface FormattedError {
          property: string;
          errors: string[];
        }
        const formatErrors = (errors: ValidationError[]): FormattedError[] => {
          const formattedErrors: FormattedError[] = [];
          for (const error of errors) {
            if (error.constraints) {
              formattedErrors.push({
                property: error.property,
                errors: Object.values(error.constraints),
              });
            }
            if (error.children && error.children.length > 0) {
              formattedErrors.push(...formatErrors(error.children));
            }
          }
          return formattedErrors;
        };
        return new BadRequestException({
          message: 'Input Validation Is Failed',
          errors: formatErrors(validationErrors),
        });
      },
    }),
    new CostumeValidationPipe(),
  );

  await app.listen(process.env.BACKEND_PORT || 3000);
  console.log(`Application Running in port ${process.env.BACKEND_PORT}`);
}
void bootstrap();
