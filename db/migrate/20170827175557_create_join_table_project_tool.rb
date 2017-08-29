class CreateJoinTableProjectTool < ActiveRecord::Migration[5.1]
  def change
    create_join_table :projects, :tools
  end
end
