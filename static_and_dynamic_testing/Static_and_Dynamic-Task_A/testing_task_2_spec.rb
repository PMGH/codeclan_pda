require('minitest/autorun')
require('minitest/rg')

require_relative('testing_task_2')


class TestTestingTask2 < MiniTest::Test

  # tests for func1, max and looper

  def test_func1__true()
    assert_equal(true, func1(1))
  end

  def test_func1__false()
    assert_equal(false, func1(3))
  end

  def test_max__a()
    a = 100
    b = 1
    assert_equal(a, max(a, b))
  end

  def test_max__b()
    a = 1
    b = 100
    assert_equal(b, max(a, b))
  end

  def test_looper__looper_10()
    assert_equal(10, looper())
  end

end
