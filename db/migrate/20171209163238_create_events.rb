class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.column :name, :string
      t.column :description, :text
      t.column :owner, :string
      t.column :when, :datetime
      
      t.timestamps
    end
  end
end
