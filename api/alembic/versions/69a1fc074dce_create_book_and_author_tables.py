"""Create book and author tables

Revision ID: 69a1fc074dce
Revises:
Create Date: 2022-04-07 18:52:17.374619

"""
import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision = "69a1fc074dce"
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table(
        "author",
        sa.Column("id", sa.Integer(), nullable=False),
        sa.Column("first_name", sa.String(), nullable=True),
        sa.Column("last_name", sa.String(), nullable=True),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index(op.f("ix_author_id"), "author", ["id"], unique=False)
    op.create_index(op.f("ix_author_last_name"), "author", ["last_name"], unique=False)
    op.create_table(
        "book",
        sa.Column("id", sa.Integer(), nullable=False),
        sa.Column("title", sa.String(), nullable=True),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index(op.f("ix_book_id"), "book", ["id"], unique=False)
    op.create_index(op.f("ix_book_title"), "book", ["title"], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f("ix_book_title"), table_name="book")
    op.drop_index(op.f("ix_book_id"), table_name="book")
    op.drop_table("book")
    op.drop_index(op.f("ix_author_last_name"), table_name="author")
    op.drop_index(op.f("ix_author_id"), table_name="author")
    op.drop_table("author")
    # ### end Alembic commands ###
