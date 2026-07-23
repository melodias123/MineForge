from sqlalchemy import Column, Integer, String

from app.database import Base


class TexturePack(Base):

    __tablename__ = "texture_packs"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String)

    description = Column(String)

    version = Column(String)

    minecraft_version = Column(String)

    status = Column(String)

    thumbnail = Column(String)

    download = Column(String)