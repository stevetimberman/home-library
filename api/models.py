"""Defines SQLAlchemy models."""
from sqlalchemy import Column, Integer, String

from api.db.base_class import Base


class Book(Base):
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)


class Author(Base):
    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String)
    last_name = Column(String, index=True)
