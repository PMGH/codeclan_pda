### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

def func1(val)  # adds brackets - good practice
  if val == 1  # uses == comparator
    return true
  else
    return false
  end
end

def max(a, b)  # defined using def and adds brackets - good practice
  if a > b
    return a  # amends indentation (readability)
  else
    b   # amends indentation (readability)
  end
end
# removed additional 'end'

def looper
  looper = 0
  for i in 1..10
    puts i
    looper += 1  # increments looper by 1 for each loop iteration
  end

  return looper  # returns 10 to pass test below
end

failures = 0

if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
end  # ends for loop


if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end


if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
  failures = failures + 1  # amends variable name typo
end


if failures > 1  # adds condition
  puts "Test Failed"
else
  puts "Test Passed"
end
