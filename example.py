def bubble_sort(arr):


  n = len(arr)
  for i in range(n):
    # Last i elements are already in place
    for j in range(0, n - i - 1):
      # Swap if the element found is greater than the next element
      if arr[j] > arr[j + 1]:
        arr[j], arr[j + 1] = arr[j + 1], arr[j]

  return arr

# Example usage
numbers = [5, 1, 4, 2, 8]
sorted_numbers = bubble_sort(numbers)
print("Sorted array:", sorted_numbers)
