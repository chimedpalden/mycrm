class CreateInteractions < ActiveRecord::Migration[7.1]
  def change
    create_table :interactions do |t|
      t.integer :interaction_type
      t.text :description
      t.string :recording
      t.references :contact, null: false, foreign_key: true

      t.timestamps
    end
  end
end
