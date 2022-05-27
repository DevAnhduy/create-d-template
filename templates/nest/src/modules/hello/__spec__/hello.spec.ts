import { Test, TestingModule } from '@nestjs/testing';
import { HelloController } from '../hello.controller';
import { HelloService } from '../hello.service';

describe('HelloController', () => {
	let helloController: HelloController;

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			controllers: [HelloController],
			providers: [HelloService],
		}).compile();

		helloController = app.get<HelloController>(HelloController);
	});

	describe('root', () => {
		it('should return "Hello World!"', () => {
			expect(helloController.getHello()).toBe('Hello World!');
		});
	});
});
