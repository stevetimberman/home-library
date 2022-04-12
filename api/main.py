from fastapi import FastAPI

from api.routers import authors, books

app = FastAPI()

app.include_router(books.router)
app.include_router(authors.router)


@app.get("/")
async def root():
    return {"message": "Home Library."}
