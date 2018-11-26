import {Component, OnInit} from '@angular/core';
import {BoardService} from '../../services/board.service';
import {BoardList} from '../../classes/board-list';

@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.scss']
})
export class BoardDetailComponent implements OnInit {

  boardList: BoardList[] = null;

  constructor(private bs: BoardService) {

  }

  ngOnInit() {
    this.bs.board.subscribe((boards) => {
      this.boardList = boards;
      console.log(boards);
    });
  }


  createNewList(listTitle) {
    if (listTitle.trim().length > 0) {
      this.bs.createBoard(listTitle);
    }
  }

  addCardToList(boardId, cardTitle: string) {
    if (cardTitle.trim().length > 0) {
      this.bs.addCardToList(boardId, cardTitle);
    }
  }
}
