class CreateVideosAndAnnotations < ActiveRecord::Migration[5.1]
  def change
    create_table :videos do |t|
      t.string :yt_id, null: false, unique: true
      t.timestamps

      t.index :yt_id
    end

    create_table :annotations do |t|
      t.string :video_id, null: false
      t.float :start, null: false
      t.float :end, null: false
      t.string :label, null:false
      t.integer :vis_imp
      t.integer :aud_imp
      t.integer :valence
      t.integer :arousal
      t.timestamps

      t.index :video_id
      t.index :start
      t.index :label
    end
  end
end
