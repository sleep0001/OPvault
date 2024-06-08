class AddCardTypeToCards < ActiveRecord::Migration[7.0]
  def change
    add_column :cards, :card_type, :string
  end
end
