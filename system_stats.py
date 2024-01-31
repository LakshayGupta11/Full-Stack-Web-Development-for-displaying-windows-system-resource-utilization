import psutil
from pymongo import MongoClient
import datetime

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['mydb']
collection = db['system_stats']

# Calculate the time range (past 7 days)
end_date = datetime.datetime.now()
start_date = end_date - datetime.timedelta(days=7)

# Loop to collect past data with 2-minute interval
while start_date <= end_date:
    current_datetime = start_date
    
    # Get system metrics
    cpu_usage = psutil.cpu_percent()
    memory = psutil.virtual_memory()
    disk = psutil.disk_usage('/')
    network = psutil.net_io_counters()

    # Store metrics in MongoDB
    document = {
        'timestamp': current_datetime,
        'cpu_usage': cpu_usage,
        'memory_percent': memory.percent,
        'disk_usage_percent': disk.percent,
        'network_bytes_sent': network.bytes_sent,
        'network_bytes_received': network.bytes_recv
    }

    collection.insert_one(document)

    print("Data stored for:", current_datetime)

    # Increment the timestamp by 2 minutes
    start_date += datetime.timedelta(minutes=2)
