class CreateTools < ActiveRecord::Migration[5.1]
  def change
    create_table :tools do |t|
      t.string :name, null: false, unique: true

      t.timestamps
    end
  end
end
