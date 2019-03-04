class CreateSecrets < ActiveRecord::Migration[5.2]
  def change
    create_table :secrets do |t|
      t.text :content
      t.string :category
      t.integer :likes
      t.integer :dislikes

      t.timestamps
    end
  end
end
