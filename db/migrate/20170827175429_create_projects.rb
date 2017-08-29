class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :title, null: false, unique: true
      t.string :description, null: false
      t.string :text
      t.string :misc
      t.string :team
      t.string :code_url
      t.string :demo_url
      t.string :img_url
      t.date :date, null: false
      t.integer :type_id
      t.integer :rank

      t.index :title
      t.index :date
      t.index :type_id
      t.index :rank

      t.timestamps
    end
  end
end
