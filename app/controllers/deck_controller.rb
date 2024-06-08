class DeckController < ApplicationController
  def make_deck
    # ページネーション
    # @cards = Card.page(params[:page]).per(10)

    @leaders = Card.where(card_type: "LEADER")
  end

  def edit
      @leader = Card.find_by(kataban: params[:kataban])

      if @leader.color.length == 3
        first_color = @leader.color[0]
        second_color = @leader.color[2]
        @characters = Card.where(card_type: "CHARACTER", color: first_color)
        @events = Card.where(card_type: "EVENT", color: first_color)
        @stages = Card.where(card_type: "STAGE", color: first_color)

        @characters2 = Card.where(card_type: "CHARACTER", color: second_color)
        @events2 = Card.where(card_type: "EVENT", color: second_color)
        @stages2 = Card.where(card_type: "STAGE", color: second_color)


      else
        @characters = Card.where(card_type: "CHARACTER", color: @leader.color)
        @events = Card.where(card_type: "EVENT", color: @leader.color)
        @stages = Card.where(card_type: "STAGE", color: @leader.color)
  
  
      end

    end
end
