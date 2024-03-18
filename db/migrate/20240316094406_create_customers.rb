class CreateCustomers < ActiveRecord::Migration[7.1]
  def change
    create_table :customers do |t|
      t.string :name
      t.string :website
      t.string :country
      t.boolean :status, default: 1

      t.timestamps
    end
  end
end
