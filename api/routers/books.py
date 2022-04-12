from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from api import crud, schemas
from api.common import get_db

router = APIRouter(prefix="/books", tags=["books"])


@router.post("/", response_model=schemas.Book)
def create_book(book: schemas.BookCreate, db: Session = Depends(get_db)):
    return crud.create_book(db=db, book=book)


@router.get("/", response_model=list[schemas.Book])
def get_books(offset: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    db_books = crud.get_books(db=db, offset=offset, limit=limit)
    return db_books


@router.get("/{book_id}", response_model=schemas.Book)
def get_book(book_id: int, db: Session = Depends(get_db)):
    db_book = crud.get_book(db=db, book_id=book_id)
    if db_book is None:
        raise HTTPException(status_code=404, detail="Book not found.")
    return db_book
