import {Injectable} from '@angular/core';
import {BoardList} from '../classes/board-list';
import {BehaviorSubject, Observable} from 'rxjs';
import {Card} from '../classes/card';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  board: Observable<BoardList[]>;
  private _board: BehaviorSubject<BoardList[]>;
  private dataStore: {
    boards: BoardList[]
  };

  constructor() {
    this.dataStore = {boards: []};
    this._board = <BehaviorSubject<BoardList[]>>new BehaviorSubject<BoardList[]>([]);
    this.board = this._board.asObservable();

  }

  createBoard(title) {

    const newBoard = new BoardList();
    newBoard.boardId = BoardService.getId();
    newBoard.cards = [];
    newBoard.title = title;
    newBoard.time = new Date();
    newBoard.createdBy = 'user'; // todo will come for this

    this.dataStore.boards.push(newBoard);
    this._board.next(Object.assign({}, this.dataStore).boards);
  }

  addCardToList(boardId: string, cardTitle: string) {

    this.dataStore.boards.forEach((boardList, i) => {
      if (boardList.boardId === boardId) {
        const newCard = new Card();
        newCard.cardId = BoardService.getId();
        newCard.title = cardTitle;
        this.dataStore.boards[i].cards.push(newCard);
      }
    });

    this._board.next(Object.assign({}, this.dataStore).boards);
  }

  create() {

  }


  update() {

  }

  get() {

  }

  delete() {

  }


  static getId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }


}
