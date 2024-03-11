# DB-Assignment
## Q-1:  Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.

### Product Entity
This entity represents individual products and their attributes such as name, description, SKU, price, etc. It contains a column named `category_id` which serves as a foreign key referencing the `id` column of the `Product_Category` entity. This column establishes the relationship between each product and its associated category.

### Product_Category Entity
This entity represents categories to which products belong. It contains an `id` column which serves as the primary key. In the `Product` entity, the `category_id` column references this `id` column. This relationship implies that each product in the `Product` entity is associated with a specific category defined in the `Product_Category` entity.

The relationship between `Product` and `Product_Category` entities is a one-to-many relationship, where each product belongs to one category, and each category can have multiple products. This relationship allows for the categorization and organization of products, enabling easier management and retrieval based on their respective categories.

---

## Q-2: How could you ensure that each product in the "Product" table has a valid category assigned to it?

To ensure that each product in the `Product` table has a valid category assigned to it, you can enforce referential integrity using a foreign key constraint. Here's how you can do it:

Define a foreign key constraint on the `category_id` column of the `Product` table, referencing the `id` column of the `Product_Category` table.
Ensure that the foreign key constraint is declared as `ON DELETE RESTRICT`, meaning that a category cannot be deleted if it's associated with any product.

Here's the modified `Product` table creation SQL statement with the foreign key constraint:

```sql
CREATE TABLE product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    SKU VARCHAR(50),
    category_id INT,
    inventory_id INT,
    price FLOAT,
    discount_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES product_category(id) ON DELETE RESTRICT,
    FOREIGN KEY (inventory_id) REFERENCES product_inventory(id),
    FOREIGN KEY (discount_id) REFERENCES discount(id)
);
