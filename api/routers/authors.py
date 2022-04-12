from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from api import crud, schemas
from api.common import get_db

router = APIRouter(prefix="/authors", tags=["authors"])


@router.post("/", response_model=schemas.Author)
def create_author(author: schemas.AuthorCreate, db: Session = Depends(get_db)):
    return crud.create_author(db=db, author=author)


@router.get("/", response_model=list[schemas.Author])
def get_authors(offset: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    db_authors = crud.get_authors(db=db, offset=offset, limit=limit)
    return db_authors


@router.get("/{author_id}", response_model=schemas.Author)
def get_author(author_id: int, db: Session = Depends(get_db)):
    db_author = crud.get_author(db=db, author_id=author_id)
    if db_author is None:
        raise HTTPException(status_code=404, detail="Author not found.")
    return db_author
