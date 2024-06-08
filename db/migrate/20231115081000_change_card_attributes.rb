class ChangeCardAttributes < ActiveRecord::Migration[7.0]
  def change
    remove_column :cards, :attribute, :string
    add_column :cards, :card_attribute, :string
  end
end
