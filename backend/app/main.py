from fastapi import FastAPI

from app.database import Base, engine
import app.models

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Coryxa API",
    description="Backend API for Coryxa",
    version="1.0.0"
)


@app.get("/")
def root():
    return {
        "message": "Welcome to the Coryxa API!",
        "status": "online",
        "version": "1.0.0"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }