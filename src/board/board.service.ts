import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { article, articleList } from './dataset/board.dataset';

@Injectable()
export class BoardService {
  create(createBoardDto: CreateBoardDto) {
    return article;
  }

  findAll() {
    return articleList;
  }

  findOne(id: number) {
    return article;
  }

  update(id: number, updateBoardDto: UpdateBoardDto) {
    return `This action updates a #${id} board`;
  }

  remove(id: number) {
    return `This action removes a #${id} board`;
  }
}
