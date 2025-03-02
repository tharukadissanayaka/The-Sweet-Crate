using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;
using System;
using System.ComponentModel;
using System.Linq;


namespace GUIProject
{
    public partial class Cart : Window, INotifyPropertyChanged
    {
        private ItemsDbContext _db = new ItemsDbContext();
        private double _totalSum;

        public Cart()
        {
            InitializeComponent();
            LoadData();
            DataContext = this; // Set DataContext to this window for binding
        }

        // Property for total sum
        public double TotalSum
        {
            get { return _totalSum; }
            set
            {
                _totalSum = value;
                OnPropertyChanged(nameof(TotalSum)); // Notify UI of changes
            }
        }

        // Load data and calculate total sum
        private void LoadData()
        {
            try
            {
                // Fetch items from the database
                var items = _db.Items.ToList();

                // Bind the items to the DataGrid
                itemGrid.ItemsSource = items;

                // Calculate the total sum
                TotalSum = items.Sum(item => item.ItemPrice);
            }
            catch (Exception ex)
            {
                MessageBox.Show($"An error occurred while loading the cart: {ex.Message}");
            }
        }

        // Remove product from the cart
        private void RemoveProduct_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                // Get the selected item from the DataGrid
                var selectedItem = itemGrid.SelectedItem as Item;
                if (selectedItem == null)
                {
                    MessageBox.Show("Please select an item to remove.");
                    return;
                }

                // Remove the item from the database
                _db.Items.Remove(selectedItem);
                _db.SaveChanges();

                // Refresh the DataGrid and total sum
                LoadData();

                MessageBox.Show("Item removed from cart.");
            }
            catch (Exception ex)
            {
                MessageBox.Show($"An error occurred while removing the item: {ex.Message}");
            }
        }

        // Implement INotifyPropertyChanged
        public event PropertyChangedEventHandler PropertyChanged;
        protected void OnPropertyChanged(string propertyName)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }

        private void ConfirmOrder_Click(object sender, RoutedEventArgs e)
        {
            MessageBox.Show($"Your order has been confirmed!!");
        }
    }
}