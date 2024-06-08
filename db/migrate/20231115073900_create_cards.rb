class CreateCards < ActiveRecord::Migration[7.0]
  def change
    create_table :cards do |t|
      t.string :card_number
      t.string :name
      t.string :cost
      t.string :power
      t.string :color
      t.string :attribute
      t.string :counter
      t.string :image_url

      t.timestamps
    end
  end
end
