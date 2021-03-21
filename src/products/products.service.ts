import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './interfaces/product.interface';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(@InjectModel('Product') private productModel: Model<Product>) {}

  async getProducts(): Promise<Product[]> {
    return await this.productModel.find().exec();
  }

  async getProduct(id: string): Promise<Product> {
    return await this.productModel.findById(id).exec();
  }

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    return await createdProduct.save();
  }

  async updateProduct(
    id: string,
    createProductDto: CreateProductDto,
  ): Promise<Product> {
    return await this.productModel
      .findByIdAndUpdate(id, createProductDto, { new: true })
      .exec();
  }

  async deleteProduct(id: string): Promise<Product> {
    return await this.productModel.findByIdAndDelete(id).exec();
  }
}
