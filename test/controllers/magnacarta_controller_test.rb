require 'test_helper'

class MagnacartaControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get magnacarta_index_url
    assert_response :success
  end

end
