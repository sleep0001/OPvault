class ChangeCardnumber < ActiveRecord::Migration[7.0]
  def change
    remove_column :cards, :card_num, :string
    add_column :cards, :kataban, :string
  end
end
