using System;
using System.Windows;
using System.Windows.Controls;

namespace GUIProject
{
    public partial class ChocolatesPage : Window
    {
        private ItemsDbContext _db = new ItemsDbContext();

        public ChocolatesPage()
        {
            InitializeComponent();
        }

        private void AddToCart_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                var button = sender as Button;
                if (button == null) return;

                var stackPanel = button.Parent as StackPanel;
                if (stackPanel == null) return;

                var name = (stackPanel.Children[1] as TextBlock)?.Text;
                var priceText = (stackPanel.Children[2] as TextBlock)?.Text;

                if (string.IsNullOrEmpty(name) || string.IsNullOrEmpty(priceText))
                {
                    MessageBox.Show("Error: Could not retrieve item details.");
                    return;
                }

                if (!double.TryParse(priceText.Replace("$", ""), out double price))
                {
                    MessageBox.Show("Error: Invalid price format.");
                    return;
                }

                var item = new Item { Name = name, ItemPrice = price };
                _db.Items.Add(item);
                _db.SaveChanges();

                MessageBox.Show("Item added to cart!");
            }
            catch (Exception ex)
            {
                // Log the inner exception
                MessageBox.Show($"An error occurred: {ex.InnerException?.Message ?? ex.Message}");
            }
        }

        private void ViewCart_Click(object sender, RoutedEventArgs e)
        {
           
                // Open the Cart window
                Cart cartWindow = new Cart();
                cartWindow.Show();
            
        }
    }
}