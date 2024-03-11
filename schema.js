const schema = {
    databaseName: 'my_product',
    tables: [
      {
        tableName: 'product',
        columns: [
          { name: 'id', type: 'INT', autoIncrement: true, primaryKey: true },
          { name: 'name', type: 'VARCHAR' },
          { name: 'desc', type: 'TEXT' },
          { name: 'SKU', type: 'VARCHAR' },
          { name: 'category_id', type: 'INT' },
          { name: 'inventory_id', type: 'INT' },
          { name: 'price', type: 'FLOAT' },
          { name: 'discount_id', type: 'INT' },
          { name: 'created_at', type: 'TIMESTAMP', defaultValue: 'CURRENT_TIMESTAMP' },
          { name: 'modified_at', type: 'TIMESTAMP', defaultValue: 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP' },
          { name: 'deleted_at', type: 'TIMESTAMP' },
        ],
        foreignKeys: [
          { columnName: 'category_id', references: { table: 'product_category', column: 'id' } },
          { columnName: 'inventory_id', references: { table: 'product_inventory', column: 'id' } },
          { columnName: 'discount_id', references: { table: 'discount', column: 'id' } },
        ],
      },
      {
        tableName: 'product_category',
        columns: [
          { name: 'id', type: 'INT', autoIncrement: true, primaryKey: true },
          { name: 'name', type: 'VARCHAR' },
          { name: 'desc', type: 'TEXT' },
          { name: 'created_at', type: 'TIMESTAMP', defaultValue: 'CURRENT_TIMESTAMP' },
          { name: 'modified_at', type: 'TIMESTAMP', defaultValue: 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP' },
          { name: 'deleted_at', type: 'TIMESTAMP' },
        ],
      },
      {
        tableName: 'product_inventory',
        columns: [
          { name: 'id', type: 'INT', autoIncrement: true, primaryKey: true },
          { name: 'quantity', type: 'INT' },
          { name: 'created_at', type: 'TIMESTAMP', defaultValue: 'CURRENT_TIMESTAMP' },
          { name: 'modified_at', type: 'TIMESTAMP', defaultValue: 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP' },
          { name: 'deleted_at', type: 'TIMESTAMP' },
        ],
      },
      {
        tableName: 'discount',
        columns: [
          { name: 'id', type: 'INT', autoIncrement: true, primaryKey: true },
          { name: 'name', type: 'VARCHAR' },
          { name: 'desc', type: 'TEXT' },
          { name: 'discount_percent', type: 'FLOAT' },
          { name: 'active', type: 'BOOLEAN' },
          { name: 'created_at', type: 'TIMESTAMP', defaultValue: 'CURRENT_TIMESTAMP' },
          { name: 'modified_at', type: 'TIMESTAMP', defaultValue: 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP' },
          { name: 'deleted_at', type: 'TIMESTAMP' },
        ],
      },
    ],
  };
  
  module.exports = schema;
  