import styles from './DirectoryControls.module.css';

export default function DirectoryControls({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
}) {
  const filters = [
    { key: 'all', label: 'All' },
    { key: 'deansLister', label: "Dean's Listers" },
    { key: 'probation', label: 'On Probation' },
  ];

  return (
    <div className={styles.controls}>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className={styles.searchInput}
      />

      <div className={styles.filterGroup}>
        {filters.map((filter) => {
          const buttonClassName =
            statusFilter === filter.key
              ? `${styles.filterButton} ${styles.activeFilter}`
              : styles.filterButton;

          return (
            <button
              key={filter.key}
              type="button"
              className={buttonClassName}
              onClick={() => onStatusFilterChange(filter.key)}
            >
              {filter.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
