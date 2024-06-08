class ChangeCardNum < ActiveRecord::Migration[7.0]
  def change
    remove_column :cards, :card_number, :string
    add_column :cards, :card_num, :string
  end
end
