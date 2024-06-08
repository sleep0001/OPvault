require "test_helper"

class DeckControllerTest < ActionDispatch::IntegrationTest
  test "should get make_deck" do
    get deck_make_deck_url
    assert_response :success
  end
end
