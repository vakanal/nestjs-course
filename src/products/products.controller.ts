import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  HttpStatus,
  Body,
  Param,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { Response } from 'express';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get('/')
  async getProducts(@Res({ passthrough: true }) res: Response) {
    const products = await this.productService.getProducts();
    return res.status(HttpStatus.OK).json({ products });
  }

  @Get('/:id')
  async getProduct(
    @Res({ passthrough: true }) res: Response,
    @Param('id') id: string,
  ) {
    const product = await this.productService.getProduct(id);
    if (!product) throw new NotFoundException('Product does not exits!');
    return res.status(HttpStatus.OK).json({ product });
  }

  @Post('/create')
  async createProduct(
    @Res({ passthrough: true }) res: Response,
    @Body() createProductDto: CreateProductDto,
  ) {
    const productCreated = await this.productService.createProduct(
      createProductDto,
    );
    res.status(HttpStatus.OK).json({ message: 'created', productCreated });
  }

  @Put('/update')
  async updateProduct(
    @Res({ passthrough: true }) res: Response,
    @Query('id') id: string,
    @Body() createProductDto: CreateProductDto,
  ) {
    const productUpdated = await this.productService.updateProduct(
      id,
      createProductDto,
    );
    if (!productUpdated) throw new NotFoundException('Product does not exits!');
    return res
      .status(HttpStatus.OK)
      .json({ message: 'updated', productUpdated });
  }

  @Delete('/delete')
  async deleteProduct(
    @Res({ passthrough: true }) res: Response,
    @Query('id') id: string,
  ) {
    const productDeleted = await this.productService.deleteProduct(id);
    if (!productDeleted) throw new NotFoundException('Product does not exits!');
    return res
      .status(HttpStatus.OK)
      .json({ message: 'deleted', productDeleted });
  }
}
