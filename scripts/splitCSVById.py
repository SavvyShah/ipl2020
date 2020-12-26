import os
import csv


def split(source_filepath, dest_folder, split_file_prefix):
    """
    Split a source csv into multiple csvs of equal numbers of records,
    except the last file.

    Includes the initial header row in each split file.

    Split files follow a zero-index sequential naming convention like so:

        `{split_file_prefix}_0.csv`
    """

    with open(source_filepath, 'r') as source:
        reader = csv.reader(source)
        headers = next(reader)
        record = headers
        file_idx = 1
        records_exist = True

        while records_exist:

            print_headers = True
            target_filename = f'{split_file_prefix}_{file_idx}.csv'
            target_filepath = os.path.join(dest_folder, target_filename)

            with open(target_filepath, 'w') as target:
                writer = csv.writer(target)
                while print_headers or (int(record[0]) < file_idx * 40):
                    if print_headers:
                        writer.writerow(headers) 
                        if(file_idx == 1):
                            record = next(reader)
                        print_headers = False

                    try:
                        writer.writerow(record)
                        record = next(reader)
                        
                    except StopIteration:
                        records_exist = False
                        break

            if print_headers:
                # we only wrote the header, so delete that file
                os.remove(target_filepath)

            file_idx += 1

split('./deliveries.csv', './deliveries', 'deliveries')
